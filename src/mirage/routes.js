export default function getRoutes() {
  this.get('/random/:id', (schema, request) => {
    let count = request.params.id || 1;
    return schema.quotes.find(
      Array.from(Array(Number(count)), (_, idx) => idx + 1)
    );
  });
}
