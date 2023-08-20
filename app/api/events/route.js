import { promises as fs } from 'fs';
import path from 'path';

import { NextResponse } from "next/server";

export const GET = async() => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'data');
  const events = await fs.readFile(jsonDirectory + '/events.json', 'utf8');

  return NextResponse.json(JSON.parse(events))
}