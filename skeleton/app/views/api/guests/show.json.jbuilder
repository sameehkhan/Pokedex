json.partial! 'guest', guest: @guest
json.extract! @guest, :gifts 
