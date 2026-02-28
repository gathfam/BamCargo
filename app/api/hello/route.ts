import { NextResponse } from 'next/server'
import connectToDatabase from '@/config/db'

export async function GET() {
  let connection

  try {
    connection = await connectToDatabase()

    const [rows] = await connection.execute(
      'SELECT * FROM users WHERE is_active = 1'
    )

    if (Array.isArray(rows) && rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  } finally {
    if (connection) {
      await connection.end()
    }
  }
}