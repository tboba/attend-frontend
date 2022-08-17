import {useRouter} from "next/router";
import Link from "next/link";
import React from "react";
import {Text} from "@chakra-ui/react";

export const NavLink: React.FC<{href: string, exact?: boolean, children: React.ReactNode}> = ({href, exact, children}) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    const activeStyling = isActive && {color: '#95bcf0', paddingBottom: '0.25rem', borderBottom: '4px solid #95bcf0'};

    return (
        <Link href={href}>
            <Text {...activeStyling} cursor='pointer'>
                {children}
            </Text>
        </Link>
    );
}