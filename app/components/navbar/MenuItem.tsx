import Link from 'next/link';

interface MenuItemProps {
    href: string;
    label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label }) => {
    return (
        <Link 
            href={href} 
            className="
                px-6 
                hover:text-pink-cus-bt 
                transition
            "
        >
            {label}
        </Link>
    );
}

export default MenuItem;
