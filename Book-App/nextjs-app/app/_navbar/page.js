'use client'; 

import Link from "next/link";

function navbar() {
    return ( 
        <>
            <div className="p-4 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">My Space</h1>
                <ul className="list-disc pl-5">
                    <li className="mb-2">
                        <Link href="/mycar/spiderman" className="text-blue-500 hover:underline">Music</Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/mycar/batman" className="text-blue-500 hover:underline">Movies</Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/mycar/superman" className="text-blue-500 hover:underline">Books</Link>
                    </li>
                </ul>
            </div>
        </>
     );
}

export default navbar;