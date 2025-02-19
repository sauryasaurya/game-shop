

def partition(array, low, high):  
    # 1. low = 0, high = 7
    pivot = array[high]
    # 1 pivot = array[7] = 5

    i = low - 1
    # i = 6

    for j in range(low, high):
        # j in range(0, 7)
        if array[j] <= pivot:
            i += 1
            # 1 In this case 5 is smallest. So i = 6
            array[i], array[j] = array[j], array[i]
            # 1. No swapping in this case

    array[i+1], array[high] = array[high], array[i+1]
    return i+1

def quicksort(array, low=0, high=None):
    if high is None:
        high = len(array) - 1

    if low < high:
        pivot_index = partition(array, low, high)
        quicksort(array, low, pivot_index-1)
        quicksort(array, pivot_index+1, high)

my_array = [64, 34, 25, 12, 22, 11, 90, 5]
quicksort(my_array)
print("Sorted array:", my_array)