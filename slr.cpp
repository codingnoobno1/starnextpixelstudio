#include <iostream>
#include <stack>
#include <vector>
#include <map>
#include <set>
#include <string>
#include <iomanip>
#include <cctype>

using namespace std;

// ===== SYMBOL TABLE =====
set<string> symbolTable;

// ===== ACTION & GOTO TABLE =====
map<int, map<string, string>> action;
map<int, map<string, int>> goTo;

// ===== GRAMMAR RULES =====
vector<pair<string, vector<string>>> rules = {
    {"E'", {"E"}},        // 0
    {"E", {"E", "+", "T"}}, // 1
    {"E", {"T"}},           // 2
    {"T", {"T", "*", "F"}}, // 3
    {"T", {"F"}},           // 4
    {"F", {"(", "E", ")"}}, // 5
    {"F", {"id"}}           // 6
};

// ===== HELPER: PRINT STACK =====
void printStack(stack<string> st) {
    vector<string> temp;
    while (!st.empty()) {
        temp.push_back(st.top());
        st.pop();
    }
    for (int i = temp.size() - 1; i >= 0; i--)
        cout << temp[i] << " ";
}

// ===== LEXER (PREPROCESSOR) =====
string preprocess(string input) {
    string result = "";
    for (int i = 0; i < input.length(); i++) {
        if (isalpha(input[i])) {
            // Found start of an identifier
            string idName = "";
            while (i < input.length() && (isalnum(input[i]))) {
                idName += input[i];
                i++;
            }
            symbolTable.insert(idName); // Store real name in symbol table
            result += "id";
            i--; // Step back for loop increment
        } else if (isspace(input[i])) {
            continue; // Skip whitespace
        } else {
            result += input[i];
        }
    }
    return result;
}

// ===== INIT SLR TABLE (precomputed) =====
void initTable() {
    action[0]["id"] = "s5"; action[0]["("] = "s4";
    action[1]["+"] = "s6"; action[1]["$"] = "acc";
    action[2]["+"] = "r2"; action[2]["*"] = "s7"; action[2][")"] = "r2"; action[2]["$"] = "r2";
    action[3]["+"] = "r4"; action[3]["*"] = "r4"; action[3][")"] = "r4"; action[3]["$"] = "r4";
    action[4]["id"] = "s5"; action[4]["("] = "s4";
    action[5]["+"] = "r6"; action[5]["*"] = "r6"; action[5][")"] = "r6"; action[5]["$"] = "r6";
    action[6]["id"] = "s5"; action[6]["("] = "s4";
    action[7]["id"] = "s5"; action[7]["("] = "s4";
    action[8]["+"] = "s6"; action[8][")"] = "s11";
    action[9]["+"] = "r1"; action[9]["*"] = "s7"; action[9][")"] = "r1"; action[9]["$"] = "r1";
    action[10]["+"] = "r3"; action[10]["*"] = "r3"; action[10][")"] = "r3"; action[10]["$"] = "r3";
    action[11]["+"] = "r5"; action[11]["*"] = "r5"; action[11][")"] = "r5"; action[11]["$"] = "r5";

    goTo[0]["E"] = 1; goTo[0]["T"] = 2; goTo[0]["F"] = 3;
    goTo[4]["E"] = 8; goTo[4]["T"] = 2; goTo[4]["F"] = 3;
    goTo[6]["T"] = 9; goTo[6]["F"] = 3;
    goTo[7]["F"] = 10;
}

// ===== SLR PARSER ENGINE =====
bool parse(string input) {
    // 1. Preprocessing (Lexing)
    string tokens = preprocess(input);
    tokens += "$";
    
    stack<string> st;
    st.push("0");

    int i = 0;

    cout << left << setw(30) << "Stack" << setw(15) << "Input" << "Action" << endl;
    cout << string(60, '-') << endl;

    while (true) {
        int state = stoi(st.top());
        string token;

        if (i >= tokens.length()) {
            token = "$";
        }
        else if (i + 1 < tokens.length() && tokens.substr(i, 2) == "id") {
            token = "id";
        }
        else {
            token = string(1, tokens[i]);
        }

        if (action[state].find(token) == action[state].end()) {
            cout << left << setw(30); printStack(st);
            cout << setw(15) << tokens.substr(i) << "ERROR" << endl;
            return false;
        }

        string act = action[state][token];

        // TRACE STEP
        cout << left << setw(30);
        stack<string> tempSt = st;
        vector<string> tempV;
        while(!tempSt.empty()){ tempV.push_back(tempSt.top()); tempSt.pop(); }
        string stackStr = "";
        for(int k=tempV.size()-1; k>=0; k--) stackStr += tempV[k] + " ";
        cout << setw(30) << stackStr;
        cout << setw(15) << tokens.substr(i);
        cout << act << endl;

        if (act[0] == 's') {
            st.push(token);
            st.push(to_string(stoi(act.substr(1))));
            if (token == "id") i += 2;
            else i++;
        } 
        else if (act[0] == 'r') {
            int ruleIndex = stoi(act.substr(1));
            auto rule = rules[ruleIndex];
            for (int k = 0; k < rule.second.size() * 2; k++) st.pop();
            int topState = stoi(st.top());
            st.push(rule.first);
            st.push(to_string(goTo[topState][rule.first]));
        } 
        else if (act == "acc") {
            return true;
        }
    }
}

// ===== MAIN =====
int main() {
    initTable();

    string rawInput;
    cout << "=== SLR PARSER WITH LEXER ===\n";
    cout << "Enter expression (e.g., apple + banana): ";
    getline(cin, rawInput); // Use getline for spaces
    cout << endl;

    symbolTable.clear();
    if (parse(rawInput)) {
        cout << "\n>>> Result: Accepted <<<\n";
        cout << "Symbol Table (Identifiers found): ";
        for (auto s : symbolTable) cout << "[" << s << "] ";
        cout << endl;
    } else {
        cout << "\n>>> Result: Rejected <<<\n";
    }

    cout << "\nPress any key to exit...\n";
    system("pause");
    return 0;
}