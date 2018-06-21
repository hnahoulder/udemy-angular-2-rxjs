export class MyCustomerObserver {
    next(val) {
        console.log(`Valeur: ${val}`);
    }

    error(err) {
        console.error(`Error: ${err}`);
    }

    complete() {
        console.log(`Complete`);
    }
}