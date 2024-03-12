import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function getProducts(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    return { jsonBody: products };
};

app.http('getProducts', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: getProducts,
    route: 'products'
});
