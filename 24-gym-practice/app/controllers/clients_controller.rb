class ClientsController < ApplicationController

    before_action :set_client, except: :index

    def index
        render json: Client.all
    end

    def show
        render json: @client, serializer: TotalMembershipsSerializer
    end

    def update
        @client.update!(client_params)
        render json: @client, status: :accepted
    end

    private

    def set_client
        @client = Client.find(params[:id])
    end

    def client_params
        params.permit(:name, :age)
    end
end
