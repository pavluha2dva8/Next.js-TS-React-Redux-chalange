import React from 'react';
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={'navbar'}>
            <Link href="/">
                <a className={'link'}>Main Page</a>
            </Link>
            <Link href="/posts/new">
                <a className={'link'}>Create New Post</a>
            </Link>

            <style jsx>
                {`
                  .navbar {
                    background: palevioletred;
                    padding: 15px;
                    margin-bottom: 25px;
                  }
                  .link {
                    text-decoration: none;
                    color: white;
                    font-size: 20px;
                    font-weight: 900;
                  }
                  .link:after {
                  margin: 0 5px 0 5px;
                  content: '/';
                  }
                  .link:last-child:after {
                  content: none;
                  }
                `}
            </style>
        </div>
    );
}