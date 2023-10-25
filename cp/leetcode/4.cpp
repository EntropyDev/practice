class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        int m = nums2.size();
        if(n>m){
            return findMedianSortedArrays(nums2,nums1);
        }
        int start = 0;
        int end = n;
        int realMid = (n+m+1)/2;
        while(start<=end){
            int mid = (start+end)/2;
            int l1size = mid;
            int l2size = realMid - mid;
            int l1 = (l1size>0) ? nums1[l1size-1]:INT_MIN;
            int l2 = (l2size>0) ? nums2[l2size-1]:INT_MIN;
            int r1 = (l1size<n) ? nums1[l1size]:INT_MAX;
            int r2 = (l2size<m) ? nums2[l2size]:INT_MAX;

            //chceck if valid partition
            if(l1<=r2 && l2<=r1){
                if((m+n)%2 == 0){
                    return (max(l1,l2)+min(r1,r2))/2.0;
                }
                return max(l1,l2);
            }else if(l1>r2){
                end = mid-1;
            }else{
                start = mid+1;
            }
        
        }
        return 0.0;
    }
};