/**
 * 该版本不会改变原数组，return出来的是一个新数组
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 数组长度
  let len = nums.length;
  // 如果数组长度为0，则返回空数组
  if (len == 0) return [];
  // 确定指针，为长度1/2位置
  let pivot = Math.floor(len / 2);
  let left = [],
    right = [];
  // 遍历数组，如果大于等于指针，则放到右边，小于指针放到左边，指针元素不动
  for (let i = 0; i < nums.length; i++) {
    if (i == pivot) continue;
    if (nums[i] < nums[pivot]) {
      left.push(nums[i]);
    } else if (nums[i] >= nums[pivot]) {
      right.push(nums[i]);
    }
  }
  // 递归去处理左区间和右区间
  let leftSort = sortArray(left);
  let righSort = sortArray(right);
  // 将左区间、指针位置的值、右区间合并
  return [...leftSort, nums[pivot], ...righSort];
};


// ---------------------------------------------------------------------------------

/**
 * 该版本会在原数组上处理，空间复杂度会更小
 * 把等于切分元素的所有元素分到了数组的同一侧，可能会造成递归树倾斜；
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function (nums) {
    let len = nums.length;
    // 调用快速排序递归算法
    quickSort(nums, 0, len - 1);
    return nums;
};

function quickSort(nums, left, right) {
    // 递归终止条件为left>=right
    // 因为如果是这种情况[1,2,3,4,5,6,7,8],这里只是举一个数组的例子，里面的值无关紧要
    // pivot如果是0，那左侧没有值了，无需排序，这种情况就是left>right
    // pivot如果是1，那左侧只有一个值，也无需排序,这种情况就是left==right
    // 同理，pivot是7和6，也不用排序,这种情况也是left>right和left==right
    if(left < right){
        // 计算隔板pIndex，并根据pIndex分好左右区间数组
        let pIndex = partition(nums, left, right);
        quickSort(nums, left, pIndex - 1);
        quickSort(nums, pIndex + 1, right);
    }
}

function partition(nums, left, right) {
    // 在left和right区间内，随机选取一个值当做pivot
    // 这里Math.floor(Math.random()*(right-left+1))计算的是随机区间长度
    // +left是加了一个偏移量，如果假设要求[3,6]区间的随机数，随机长度为3，偏移量为3
    let randomIndex = Math.floor(Math.random()*(right - left + 1)) + left;
    // 交换左边界和随机index
    swap(nums, left, randomIndex);
    // 将左边界当做基准值，其实这时候的左边界值就是刚才随机生成的randomIndex对应的值
    let pivot = nums[left];

    let lt = left;//lt 的含义就是，在lt及lt的左边都是小于pivot的值
    // 循环不变量：
    // left+1为pivot左区间的左边界
    // lt为pivot左区间的右边界
    // lt+1为pivot右区间的左边界，注意lt+1位置是留给pivot的
    // i为右区间的右边界
    // 即
    // all in [left + 1, lt] < pivot
    // all in [lt + 1, i) >= pivot
    // 这里要注意循环区间为[left+1,right],因为left项为pivot，不用管它
    for (let i = left + 1; i <= right; i++) {
        // 当前项小于pivot，那么我们先要将lt++；因为当前lt及lt左侧代表的是小于pivot的值
        // 那lt右侧第一个位置就是我们可以用来存放下一个小于pivot值的位置
        // 所以我们先把[left+1,lt]这个区间扩容
        // 然后再将应该进入这个区域的nums[i]与新扩容的位置值交换
        if (nums[i] < pivot) {
            lt++;
            swap(nums, i, lt);
        }
    }
    // 此时，我们需要将pivot放到它应该在的位置
    // 分析可得，此时lt位置的值是小于pivot的，lt+1位置的值是大于等于pivot的
    // 那么我们将pivot和lt交换后，即可保证，pivot左侧都小于pivot，右侧都大于等于pivot
    swap(nums, left, lt);
    // 交换之后，这个lt就是pivot的下标了
    return lt;
}
function swap(nums, index1, index2) {
    let temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

// ---------------------------------------------------------------------------------

/**
 * 原位交换双指针法，把等于切分元素的所有元素等概率地分到了数组的两侧，避免了递归树倾斜，递归树相对平衡；
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    quickSort(nums,0,nums.length-1);
    return nums;
};

function quickSort(nums,left,right){
    if(left<right){
        let pIndex = partition(nums,left,right);
        quickSort(nums,left,pIndex-1)
        quickSort(nums,pIndex+1,right)
    }
}

function partition(nums,left,right){
    // 这里Math.floor(Math.random()*(right-left+1))计算的是随机区间长度
    // +left是加了一个偏移量，如果假设要求[3,6]区间的随机数，随机长度为3，偏移量为3
    let randomIndex = Math.floor((right-left+1)/2+left);
    // let randomIndex = Math.floor(Math.random()*(right-left+1))+left;
    swap(nums,left,randomIndex)
    let pivot = nums[left];
    let lt = left+1;
    let gt = right;
    // 循环不变量：
    // all in [left + 1, lt) <= pivot
    // all in (gt, right] >= pivot
        while (true) {
            // lt从左到右移动，只要值小于pivot，则将左区间扩容
            while (lt <= right && nums[lt] < pivot) {
                lt++;
            }
            // gt从右到左移动，只要值大于pivot，则将右区间扩容
            while (gt > left && nums[gt] > pivot) {
                gt--;
            }
            // 正常结束循环是lt > gt
            // 当最后lt和gt夹逼到中间，只剩最后一个值且等于pivot的时候，此时lt会等于gt，就不用再交换了，直接退出
            if (lt >= gt) {
                break;
            }

            // 细节：相等的元素通过交换，等概率分到数组的两边
            // 这里交换的情况有几种情况需要明白
            // 1. lt对应的值大于或等于pivot
            // 2. gt对应的值小于或等于pivot
            // 那么除了会将lt对应的大值丢到右边，gt对应的小值丢到左边外
            // 还会把等于pivot的值往两边丢，但这不影响，两边还会继续递归排序的
            swap(nums, lt, gt);
            lt++;
            gt--;
        }
        // 这里为什么是pivot和gt交换，而不是和lt交换呢？
        // 因为pivot所在的位置是左区间，将pivot换到中间位置后，应该将属于左区间的值换过来才对
        // 而结束循环后，gt对应的值一定小于等于pivot，lt对应的值一定大于等于pivot
        // 所以我们应该跟gt交换
        swap(nums, left, gt);
        return gt;
}

function swap(nums,i,j){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// ---------------------------------------------------------------------------------

/**
 * 三指针。把等于切分元素的所有元素挤到了数组的中间，在有很多元素和切分元素相等的情况下，递归区间大大减少。
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArray = function(nums) {
    quickSort(nums,0,nums.length-1);
    return nums;
};

function quickSort(nums,left,right){
    if(left<right){
        let [lt,gt] = partition(nums,left,right);
        quickSort(nums,left,lt);
        quickSort(nums,gt,right);
    }
}

function partition(nums,left,right){
    let randomIndex = Math.floor(Math.random()*(right-left+1))+left;
    swap(nums,left,randomIndex);
    let pivot = nums[left];
    // 左区间右边界
    let lt = left;
    // 右区间左边界
    let gt = right+1;
    // 循环下标，从left+1开始循环
    let i = left+1;
    // all in [left+1,lt] <pivot
    // all in [lt+1,i) == pivot,
    // all in [gt,right] < pivot
    // 循环在i>=gt时结束，即最后遍历的值是gt左边的那个值，因为gt都是大于pivot的，没必要再往后遍历了,否则既浪费时间，循环内判断还得大改
    while(i<gt){
        // 当前值小于pivot，则左区间扩容，交换当前值到左区间，下标++
        if(nums[i]<pivot){
            lt++;
            swap(nums,i,lt);
            i++;
        }else if(nums[i] == pivot){
            // 当前值等于pivot，那么直接往前进，后面如果遇到了小于pivot的值，会把这个相等的值再丢回中间
            // 如果后面不会再遇到小于pivot的值，那么这个相等的值等于是已经在中间了
            // 这个就能保证最终会将等于pivot的值夹逼到中间区间，为我们后序分治节省时间埋下伏笔
            i++;
        }else{
            // 当前值大于pivot，则右区间扩容，交换当前值到右区间
            // 由于交换过来的值是多少不知道，还需要判断交换过来的值，所以i不能够++
            gt--;
            swap(nums,i,gt);
        }
    }
    // 最后由于lt对应的值是左区间的右边界，所以将pivot和它交换可以保证pivot左区间仍然都是小于pivot的
    swap(nums, left, lt);
    // 返回左区间和右区间的边界下标
    return [lt,gt];
}

function swap(nums,i,j){
    if(i==j)return;
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}