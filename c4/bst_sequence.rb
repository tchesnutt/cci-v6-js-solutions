# Goal: A binary search tree was created by traversing through an array from
#       left to right and inserting each element. Given a binary search tree
#       with distinct elements, print all possible arrays that could have led
#       to this tree.



def bst_sequences(node)
  results = []
  if node.nil?
    results << []
    return results
  end

  left = bst_sequences(node.left)
  right = bst_sequences(node.right)

  prefix = [node.data]

  left.each do |left_seq|
    right.each do |right_seq|
      result += mix_sequences(left_seq, right_seq, prefix)
    end
  end

  result
e

def mix_sequences(left, right, prefix)
  results = []

  if left.empty? || right.empty?
    results << prefix + left + right
    return results
  end

  results += mix_sequences(left.drop(1), right, prefix + [left[0]])
  results += mix_sequences(left, right.drop(1), prefix + [right[0]])

  return results
end
