async function getServices() {
    const query = `
    query Services {
      services {
        id
        title
        content { document }
      }
    }
  `;
    const res = await fetch("http://localhost:4000/admin/api/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}\n${text}`);
    }

    const { data } = await res.json();
    return data.advantages;
}