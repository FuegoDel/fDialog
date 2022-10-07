local inDialog


function OpenDialog(msg)
	if inDialog then
		return;
	end
	inDialog = true;
	SendNUIMessage({
		msg = msg
	})
	local message;
	while inDialog and true do
		Wait(0)
		DisableControlAction(0,246,true);
		DisableControlAction(0,249,true);
		if IsDisabledControlJustReleased(0,246) then
			message = true;
			break;
		elseif IsDisabledControlJustReleased(0,249) then
			message = false;
			break;
		end
	end

	DeleteDialog(message);
	return message;
end

RegisterCommand('testdialog', function ()
	local question = OpenDialog('This is a test dialog that can be used for multiple interactions');
end)

function DeleteDialog(answer)
	inDialog = false;
	SendNUIMessage({
		msg = 'delete',
		answer = answer
	})
end

exports('OpenDialog',OpenDialog);

exports('DeleteNotification',DeleteDialog)