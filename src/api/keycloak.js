import Keycloak from 'keycloak-js';

const keycloak = Keycloak('/keycloak.json');

function init(onSuccess, onError) {
  console.log('Keyckiak#init', new Date());
  keycloak
    .init({ onLoad: 'login-required' })
    .success(onSuccess)
    .error(onError);
}

function loadUserInfo(onSuccess, onError) {
  console.log('Keyckiak#loadUserInfo', new Date());
  keycloak
    .loadUserInfo()
    .success(onSuccess)
    .error(onError);
}

export default {
  init,
  loadUserInfo,
};
