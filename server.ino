void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);

}

void loop() {
  // put your main code here, to run repeatedly:

  if(Serial.available()){
    char c = Serial.read();
    Serial.print(c);

    if (c == 'L'){
      digitalWrite(LED_BUILTIN, HIGH);
    } else if (c =='D') {
      digitalWrite(LED_BUILTIN, LOW);
    }
  }

}