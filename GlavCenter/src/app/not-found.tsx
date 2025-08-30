export default function NotFound() {
    const wrapper: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "system-ui, sans-serif",
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#000",
    };

    const title: React.CSSProperties = {
        fontSize: "2rem",
        fontWeight: "500",
        marginBottom: "0.5rem",
    };

    const text: React.CSSProperties = {
        fontSize: "1rem",
    };

    return (
        <main style={wrapper}>
            <h1 style={title}>404</h1>
            <p style={text}>This page could not be found.</p>
        </main>
    );
}
