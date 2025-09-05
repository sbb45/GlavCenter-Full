export default function EmailTemplate({ title, content }: { title: string; content: string }) {
    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            margin: "0 auto",
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #eee",
            overflow: "hidden"
        }}>
            <div style={{
                background: "#6C63FF",
                color: "#fff",
                padding: "20px",
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "bold"
            }}>
                {title}
            </div>
            <div style={{
                padding: "20px",
                color: "#333",
                lineHeight: 1.6
            }} dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{
                background: "#f9fafb",
                padding: "15px",
                textAlign: "center",
                fontSize: "12px",
                color: "#777"
            }}>
                Эта заявка отправлена с сайта GlavCenter
            </div>
        </div>
    );
}
