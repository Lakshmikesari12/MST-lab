def sort_array(array):
    """
    Sorts the given array.
    
    Args:
        array (list): A list of comparable items.
        
    Returns:
        list: The sorted list.
    """
    return sorted(array)

# Example usage
numbers = [5, 2, 7, 1, 3]
words = ["banana", "apple", "cherry", "date"]

sorted_numbers = sort_array(numbers)
sorted_words = sort_array(words)

print("Sorted numbers:", ", ".join(map(str, sorted_numbers)))
print("Sorted words:", ", ".join(sorted_words))