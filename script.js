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
