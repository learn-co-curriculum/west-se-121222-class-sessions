class ClientsController < ApplicationController

    before_action :set_client

    def show
        render json: @client
    end

    private

    def set_client
        @client = Client.find(params[:id])
    end
end
