import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from "next/server";
import { nanoid } from 'nanoid';


export const GET = async() => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  const events = await fs.readFile(jsonDirectory + '/events.json', 'utf8');

  return NextResponse.json(JSON.parse(events))
}

export const POST = async(req) => {
  const event = await req.json();

  //Get events array
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonString = await fs.readFile(filePath, 'utf8');
  const events = JSON.parse(jsonString);
 
  //Asign an id to the event
  event.id = nanoid();

  //Add the new event
  events.push(event);
  await fs.writeFile(filePath, JSON.stringify(events, null, 2));

  return NextResponse.json({
    event
  }, {
    status: 200
  });
}

export const DELETE = async(req) => {
  const { eventId } = await req.json();

  //Get events array
  const filePath = path.join(process.cwd(), 'data', 'events.json');
  const jsonString = await fs.readFile(filePath, 'utf8');
  const events = JSON.parse(jsonString);

  await fs.writeFile(filePath, JSON.stringify(events.filter(e => e.id != eventId), null, 2));

  return NextResponse.json({
    eventId
  }, {
    status: 200
  });
}