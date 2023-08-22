import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from "next/server";
import { nanoid } from 'nanoid';


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