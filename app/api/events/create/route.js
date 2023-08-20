import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from "next/server";

export const POST = async(req) => {
  const res = req.json();

  console.log(res.body)

  return NextResponse.json({})
}