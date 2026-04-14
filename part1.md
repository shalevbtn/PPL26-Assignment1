## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   i. [5 points] Imperative
   ii. [5 points] Object Oriented
   iii. [5 points] Functional
2. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
3. [5 points] How does the functional paradigm improve over the object oriented paradigm?

### Answer:
1.
i. Imperative programming is writing code line by line telling the computer exactly what to do.

ii. Organize code around objects (structure) that have data and behavior.

iii. Functional programming is building programs using functions only, avoiding changing data.

2.
The Object-Oriented paradigm improves over the imperative approach by providing better encapsulation and modularity. By grouping data and behavior into objects, it reduces the complexity of managing global state and makes code easier to read, reuse and maintain in large-scale systems.

3.
The Functional paradigm improves over OO by emphasizing immutability and statelessness. This leads to fewer side effects, making code more predictable and easier to test. It also simplifies concurrent programming because there is no shared mutable state to manage, and it allows for higher levels of abstraction through function composition.


### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### Answer:

```ts
const getDiscountedProductAveragePriceFP = (inventory: Product[]): number => {
    const discountedProducts: Product[] = inventory.filter((p: Product) => p.discounted);
    const discountedPrices: number[] = discountedProducts.map((p: Product) => p.price);
    const totalPrice: number = discountedPrices.reduce((total: number, p: number) => total + p, 0);
    return discountedProducts.length === 0 ? 0 : totalPrice / discountedProducts.length;
}
```


### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`

### Answer:

1. <T>(x: T[], y: (arg: T) => boolean) => boolean
2. (x: number[]) => number[]
3. <T>(x: T[], y: (arg: T) => boolean) => T[]
4. (x: number[]) => number
5. <T>(x: boolean, y: T[]) => T
6. <T,S>(f: (arg: T) => S, g: (arg :number) => T) => (x: number) => S

