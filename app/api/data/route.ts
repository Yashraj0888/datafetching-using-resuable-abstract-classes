/**
 * Handles GET requests to the data API route.
 *
 * This function reads a JSON file from the public/data directory based on the 'type' query parameter
 * and returns its contents as a JSON response. If the 'type' parameter is missing or the file does not exist,
 * appropriate error responses are returned.
 *
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a NextResponse object containing the JSON data or an error message.
 *
 * @throws {Error} - Throws an error if there is an issue reading the file or parsing its contents.
 */


import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const type = request.nextUrl.searchParams.get('type');
    
    if (!type) {
      return NextResponse.json(
        { error: 'Type parameter is required' },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), 'public', 'data', `${type}.json`);
    
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent);
      return NextResponse.json(data);
    } catch (error) {
      if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
        return NextResponse.json(
          { error: `No data found for type: ${type}` },
          { status: 404 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in data API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 