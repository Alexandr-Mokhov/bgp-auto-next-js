"use client"
import { useSearchParams } from 'next/navigation';

export default function SearchTable() {
  const searchParams = useSearchParams();
	const table = searchParams ? searchParams.get('table') : null;
 
  return table;
}
