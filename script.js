* Reset and base */
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
}
#quiz-container {
  background: #1a1a2e;
  border-radius: 15px;
  width: 350px;
  max-height: 600px;
  padding: 25px 30px 30px 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  text-align: center;
  margin-bottom: 20px;
}
header h1 {
  font-weight: 900;
  font-size: 1.8rem;
  letter-spacing: 2px;
  margin: 0;
  color: #f8f9fa;
  text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}
#question-number {
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
#question-text {
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 15px;
  min-height: 60px;
}
.choices {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}
.choice-item {
  background: #273469;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.3);
  transition: background-color 0.3s ease;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.choice-item:hover {
  background: #4056f4;
}
.choice-item input[type="radio"] {
  margin-right: 15px;
  cursor: pointer;
  accent-color: #4056f4; /* Radiopainikkeen korostusväri */
  width: 20px;
  height: 20px;
}
.choice-label {
  flex: 1; /* Vie jäljelle jäävän tilan */
  font-size: 1rem;
}
#buttons {
  display: flex;
  justify-content: space-between; /* Nappien väliin tilaa */
}
button {
  background: #4056f4; /* Sininen tausta */
  border: none;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 25px;
  border-radius: 30px; /* Pyöreä muoto */
  box-shadow: 0 6px 10px rgba(64,86,244,0.7);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  min-width: 100px;
}
button:disabled {
  background: #7c84ff80; 
  box-shadow: none;
  cursor: default;
}
button:hover:not(:disabled) {
  background: #2438d6;
  box-shadow: 0 8px 14px rgba(36,56,214,0.9);
}
button:active:not(:disabled) {
  transform: translateY(2px); 
}
#result {
  text-align: center;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
}
#score-text {
  font-size: 2.5rem;
  color: #76ff03; 
  margin: 12px 0;
  text-shadow: 2px 2px 8px #5cae00;
}
