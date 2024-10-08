export interface MenuItem {
    id: number;
    name: string;
    link: string;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        id: 1,
        name: 'HOME',
        link: '/'
    },
    {
        id: 2,
        name: 'ABOUT US',
        link: '/about'
    },
    {
        id: 3,
        name: 'SERVICES',
        link: '/services',
        
    },
    {
        id: 4,
        name: 'TEAMS',
        link: '/teams'
    },
    {
        id: 5,
        name: 'PROJECTS',
        link: '/projects'
    },
    {
        id: 6,
        name: 'CONTACT US',
        link: '/contact-us'
    }
];
