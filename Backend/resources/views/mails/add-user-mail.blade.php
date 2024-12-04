<div>
    <p>Welcome {{$user->name}}</p>
    <p>You can set your password <a href="{{env('FRONTEND_URL') . '/set-password?token=' . $token}}">Here!</a></p>
</div>
