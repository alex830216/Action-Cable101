class PageController < ApplicationController
  def show
    ActionCable.server.broadcast("room_channel", {message: "hello"})
  end
end
