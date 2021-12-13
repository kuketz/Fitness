<?php

/* https://api.telegram.org/bot5073070396:AAFyhusgSNZIosJSMx6M9VnMJDtXdR1lX6w/getUpdates,
где, 5073070396:AAFyhusgSNZIosJSMx6M9VnMJDtXdR1lX6w - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$msg = $_POST['user_msg'];
// токен нашего бота из botFather
$token = "5073070396:AAFyhusgSNZIosJSMx6M9VnMJDtXdR1lX6w";
// $chat_id = "https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXXXX/getUpdates";
$chat_id = "-1001614079573";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'сообщение' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");


if ($sendToTelegram) {
  echo "true";
} else {
   echo "false";
}
?>
