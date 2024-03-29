class GymsController < ApplicationController

    before_action :set_gym, except: :index

    def index
        render json: Gym.all
    end

    def show
        render json: @gym, serializer: GymWithClientsSerializer # not in deliverables
    end

    def update
        @gym.update!(gym_params)
        render json: @gym, status: :accepted
    end

    def destroy
        @gym.destroy
        head :no_content
    end

    private

    def set_gym
        @gym = Gym.find(params[:id])
    end

    def gym_params
        params.permit(:name, :address)
    end
end
