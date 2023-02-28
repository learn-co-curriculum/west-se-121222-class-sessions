class ClientsController < ApplicationController

    before_action :set_client, except: :index
    # if you were abstracting the find functionality to the ApplicationController, you'd
    # call :set_resource instead in the before_action and 
    # replace @client with @resource in #show and #update
    # set_client would no longer be needed
    

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
