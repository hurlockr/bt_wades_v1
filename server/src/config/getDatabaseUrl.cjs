const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/bt-wades-v1_development",
      test: "postgres://postgres:postgres@localhost:5432/bt-wades-v1_test",
      e2e: "postgres://postgres:postgres@localhost:5432/bt-wades-v1_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
