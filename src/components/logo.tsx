import * as React from "react";

const Logo = ({ className }: { className: string }) => (
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 29 23"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M4.00075 0.599998H8.76875L12.4168 23H8.89675L8.25675 18.552V18.616H4.25675L3.61675 23H0.35275L4.00075 0.599998ZM7.84075 15.576L6.27275 4.504H6.20875L4.67275 15.576H7.84075ZM14.1245 0.599998H19.1485L21.3885 16.632H21.4525L23.6925 0.599998H28.7165V23H25.3885V6.04H25.3245L22.7645 23H19.8205L17.2605 6.04H17.1965V23H14.1245V0.599998Z"
            fill="currentColor"
        />
    </svg>
);
export default Logo;
