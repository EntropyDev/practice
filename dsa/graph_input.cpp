// Online C++ compiler to run C++ program online
#include <iostream>
#include<vector>
using namespace std;

void addAList(int u,int v,int w,bool isDirected,vector<vector<pair<int,int>>> &adjList){
    adjList[u].push_back({v,w});
    if(!isDirected){
        adjList[v].push_back({u,w});
    }
}

void addAMatrix(int u, int v, int w,bool isDirected, vector<vector<int>> &adjMatrix
){
    adjMatrix[u][v] = w;
    if(!isDirected) adjMatrix[v][u] = w;
}


int main() {
    // Write C++ code here
    int n,e;
    cin >> n >> e;
    // adj list - {(v,wt))}
    vector<vector<pair<int,int>>> adjList(n);
    // adj matrix
    vector<vector<int>> adjMatrix(n,vector<int>(n,0));
    
    while(e--){
        int u,v,w;
         cin >> u >>v >> w;
         addAList(u,v,w,true,adjList);
         addAMatrix(u,v,w,true,adjMatrix);
    }
    
    // print adjList
    for(auto it: adjList){
        for(auto it2: it){
            cout<<it2.first<<" "<<it2.second<<endl;
        }
        cout<<endl;
    }
     for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            cout<<adjMatrix[i][j]<< " ";
        }
        cout<<endl;
     }

    return 0;
}
