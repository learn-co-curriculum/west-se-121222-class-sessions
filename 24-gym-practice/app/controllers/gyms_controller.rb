class GymsController < ApplicationController

    before_action :set_gym

    def show
        render json: @gym
    end

    def destroy
        @gym.destroy
        head :no_content
    end

    private

    def set_gym
        @gym = Gym.find(params[:id])
    end
end
