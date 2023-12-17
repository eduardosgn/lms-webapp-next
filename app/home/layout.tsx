import HomepageNav from "./_components/HomepageNav";

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HomepageNav />
            {children}
        </>
    );
}
