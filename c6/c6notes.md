## Math and Logic Puzzles

### Prime Numbers
Every positive integers can be decomposed into a product of primes.
  `84 = 2^2 * 3^1 * 5^0 * 7^1 * 11^0 * 13^0 * 17^0 ...`

#### Divisibility
The prime number law stated above means that, in order for a number X to divide a number Y, all primes in X's prime factorization must be Y's prime factorization. Or, more specifically:

  `
  Let x = 2^j0 * 3^j1 * 5^j2 * 7^j3 * 11^j4 * ...
  `

  `
  Let y = 2^k0 * 3^k1 * 5^k2 * 7^k3 * 11^k4 * ...
  `

  If x/y, then for all i, ji <= ki

In fact, the greatest common divisor of x and y will be:

`
gcd(x, y) = 2^min(j0, k0) * 3^min(j1, k1) * 5^min(j2, k2) * ...
`

The least common multiple of x and y will be:

`
lcm(x, y) = 2^max(j0, k0) * 3^max(j1, k1) * 5^max(j2, k2) * ...
`

#### Checking for Primality
The naive way is to simply iterate from 2 through n-1, checking for divisibility on each iteration.
A small improvement is to iterate from 2 to the MATH.sqrt(n).

##### Generating a list of Primes: Sieve of Eratosthenes
Recognize that all non-primes numbers are divisible by a prime number.
Start with a list of all the numbers up through some value `max`. First, we cross off all numbers divisible by 2. Then, we look for the next prime and cross f all numbers divisible by it. By crossing off all numbers divisible by 2,3,5,7,11, and so on, we wind up with a list of prime numbers from 2 through `max`.

```javascript
const sieveOfEratosthenes = (max) => {
  let flags = {}
  let count = 0;
  while(count <= max + 1){
    flags[count] = true;
  }
  count = 0;
  let prime = 2;

  while(prime < Math.sqrt(max)){
    crossOff(flags, prime);
    prime = getNextPrime(flags, prime);
  }
  let result = [];
  let names = Object.getOwnPropertyNames(flags)
  names.forEach( int => if(flags[int]) result.push(int));
  return result;
}

const crossOff = (flags, prime) => {
  for(let i = prime * prime; i < flags.length; i += prime){
    flags[i] = false;
  }
}

const getNextPrime = (flags, prime) => {
  next = prime + 1;
  while(next < flags.length && !flags[next]){
    next++;
  }
  return next;
}
```

You can optimize this by only using the odd numbers in the array.

### Probability
Suppose a Venn Diagram with the left circle as A and the second as B and you throw darts at it. What would be the probability that you land in the overlap? If you knew the probability of landing in A, and you also knew the percent of A that's in B, then you could express the probability as:

`
P(A and B) = P(B given A) * P(A)
`

For example, imagine we were picking a number between 1 and 10 (inclusive). What's the probability of picking a number that is both even and between 1 and 5? The odds of picking a number between 1 and 5 is 50%, and the odds of being even is 40%. So, the odds of both are:

`
P(x is even and x <= 5) = P(x is even given x <= 5) * P(x <= 5)
                        = (2/5) * (1/2)
                        = 1/5
`

Observe that since P(A and B) = P(B given A) * P(A) = P(A given B) * P(B), you can express the probability in reverse:

`
P(A given B) = P(B given A) * P(A) / P(B)
`

Wooo, the above is Bayes' Theorem.
