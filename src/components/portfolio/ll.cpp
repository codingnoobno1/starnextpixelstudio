#include <iostream>
#include <stack>
#include <map>
#include <vector>
using namespace std;

// Parsing table
map<string, map<string, vector<string>>> table;

void initTable() {
    table["E"]["id"] = {"T", "E'"};
    table["E"]["("] = {"T", "E'"};

    table["E'"]["+"] = {"+", "T", "E'"};
    table["E'"][")"] = {"ε"};
    table["E'"]["$"] = {"ε"};

    table["T"]["id"] = {"F", "T'"};
    table["T"]["("] = {"F", "T'"};

    table["T'"]["+"] = {"ε"};
    table["T'"]["*"] = {"*", "F", "T'"};
    table["T'"][")"] = {"ε"};
    table["T'"]["$"] = {"ε"};

    table["F"]["id"] = {"id"};
    table["F"]["("] = {"(", "E", ")"};
}

bool isTerminal(string s) {
    return !(s == "E" || s == "E'" || s == "T" || s == "T'" || s == "F");
}

int main() {
    initTable();

    string input;
    cout << "Enter input string (use id, +, *, (, )): ";
    cin >> input;
    input += "$";

    stack<string> st;
    st.push("$");
    st.push("E");

    int i = 0;

    while (!st.empty()) {
        string top = st.top();
        string current;
        if (input[i] == 'i' && input[i+1] == 'd') current = "id";
        else current = string(1, input[i]);

        if (top == current) {
            st.pop();
            if (current == "id") i += 2;
            else i++;
        }
        else if (isTerminal(top)) {
            cout << "Rejected\n";
            return 0;
        }
        else {
            if (table[top].count(current)) {
                st.pop();
                vector<string> production = table[top][current];

                if (!(production.size() == 1 && production[0] == "ε")) {
                    for (int j = production.size() - 1; j >= 0; j--) {
                        st.push(production[j]);
                    }
                }
            } else {
                cout << "Rejected\n";
                return 0;
            }
        }
    }

    if (i == input.length())
        cout << "Accepted\n";
    else
        cout << "Rejected\n";

    return 0;
}
