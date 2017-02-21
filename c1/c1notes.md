Hash Table
  - maps keys to values for efficent lookup

ArrayList && Resizable Arrays
  - ArrayList same as dynamic arrays in ruby or JS
  - Q? Why is amortized insertion runtime O(1)?
    - Total number of copies to insert N elements is roughly N/2 + N/4 + N/8 + ... + 2 + 1, which is less than N.
    - Therefore inserting N elements takes O(N) time
