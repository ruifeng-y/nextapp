import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import './styles/index.css';

export const metadata: Metadata = {
    title: 'nextapp',
    description: '3r教室Next.js全栈开发课程',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
        <body>
            <div className="tw-app-layout">{children}</div>
        </body>
    </html>
);

export default RootLayout;