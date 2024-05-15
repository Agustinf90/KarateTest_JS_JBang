function fn() {
  karate.log('*** in karate-config.js');
  var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config
    env: env,
    email: 'agus@mail.com',
    password: 'agus123',
    top : 'top'
  
  };

  return config;
}
