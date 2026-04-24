#include <iostream>
#include <stack>
#include <map>
#include <vector>
#include <string>
#include <set>

using namespace std;

// ===== GLOBAL STATE =====
map<string, map<string, vector<string>>> table;
set<string> nonTerminals;
string startSymbol;

// Generic check for terminals
bool isTerminal(string s) {
    if (s == "ε") return true;
    return nonTerminals.find(s) == nonTerminals.end();
}

// ===== PARSER ENGINE =====
void runParser() {
    string input;
    cout << "Enter input string to parse: ";
    cin >> input;
    input += "$";

    stack<string> st;
    st.push("$");
    st.push(startSymbol);

    int i = 0;
    bool rejected = false;

    while (!st.empty()) {
        string top = st.top();
        string current;

        // Tokenization for 'id'
        if (i + 1 < input.length() && input.substr(i, 2) == "id")
            current = "id";
        else if (i < input.length())
            current = string(1, input[i]);
        else
            current = "$";

        if (top == current) {
            st.pop();
            if (current == "id") i += 2;
            else i++;
        }
        else if (isTerminal(top)) {
            rejected = true;
            break;
        }
        else {
            if (table[top].count(current)) {
                st.pop();
                vector<string> prod = table[top][current];

                if (!(prod.size() == 1 && prod[0] == "ε")) {
                    for (int j = prod.size() - 1; j >= 0; j--) {
                        st.push(prod[j]);
                    }
                }
            } else {
                rejected = true;
                break;
            }
        }
    }

    if (!rejected && i == input.length())
        cout << "\n>>> Result: Accepted <<<\n";
    else
        cout << "\n>>> Result: Rejected <<<\n";
}

// ===== OPTION 1: PRE-LOADED ARITHMETIC =====
void loadArithmetic() {
    table.clear();
    nonTerminals = {"E", "E'", "T", "T'", "F"};
    startSymbol = "E";

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
    
    cout << "\n[Grammar Loaded: Arithmetic Expressions]\n";
}

// ===== OPTION 2: PRE-LOADED BRACKETS =====
void loadBrackets() {
    table.clear();
    nonTerminals = {"S"};
    startSymbol = "S";

    // Populating using switch-like structure as requested previously
    for (int i = 0; i < 3; i++) {
        switch(i) {
            case 0: table["S"]["("] = {"(", "S", ")", "S"}; break;
            case 1: table["S"][")"] = {"ε"}; break;
            case 2: table["S"]["$"] = {"ε"}; break;
        }
    }
    cout << "\n[Grammar Loaded: Bracket Matching]\n";
}

// ===== OPTION 3: CUSTOM DYNAMIC INPUT =====
void loadCustom() {
    table.clear();
    nonTerminals.clear();
    
    cout << "\n--- Custom Grammar Setup ---\n";
    cout << "Enter Start Symbol: ";
    cin >> startSymbol;

    int n;
    cout << "Number of Non-Terminals: ";
    cin >> n;
    cout << "Enter Non-Terminals (space separated): ";
    for (int i = 0; i < n; i++) {
        string nt; cin >> nt;
        nonTerminals.insert(nt);
    }

    int entries;
    cout << "Number of table entries: ";
    cin >> entries;
    for (int i = 0; i < entries; i++) {
        string nt, t;
        int prodSize;
        cout << "\nEntry " << i + 1 << ":\n";
        cout << "  Non-Terminal: "; cin >> nt;
        cout << "  Terminal: "; cin >> t;
        cout << "  Symbols in production (use 1 for 'ε'): ";
        cin >> prodSize;
        vector<string> prod;
        cout << "  Enter symbols: ";
        for (int j = 0; j < prodSize; j++) {
            string s; cin >> s;
            prod.push_back(s);
        }
        table[nt][t] = prod;
    }
}

// ===== MAIN MENU =====
int main() {
    int choice;
    do {
        cout << "\n====================================\n";
        cout << "        LL(1) PARSING SYSTEM        \n";
        cout << "====================================\n";
        cout << "1. Pre-loaded: Arithmetic (id, +, *, (, ))\n";
        cout << "2. Pre-loaded: Bracket Matching ((), epsilon)\n";
        cout << "3. Custom: Define Your Own Grammar\n";
        cout << "4. Exit\n";
        cout << "Choice: ";
        cin >> choice;

        if (choice == 1) {
            loadArithmetic();
            runParser();
        } else if (choice == 2) {
            loadBrackets();
            runParser();
        } else if (choice == 3) {
            loadCustom();
            runParser();
        } else if (choice == 4) {
            cout << "Exiting...\n";
        } else {
            cout << "Invalid choice!\n";
        }
    } while (choice != 4);

    cout << "\nPress any key to close the terminal...\n";
    system("pause");
    return 0;
}
