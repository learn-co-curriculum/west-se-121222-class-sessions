class CampersController < ApplicationController

    before_action :find_camper, only: [:show, :destroy]

    def index
        render json: Camper.all
    end

    def show
        # camper = Camper.find(params[:id])
        render json: @camper, serializer: CamperWithActivitiesSerializer
    end
    
    def create
        camper = Camper.create!(camper_params)
        render json: camper, status: :created
    end
    
    def destroy # not in deliverables! for demo only!
        @camper.destroy
    end
    
    private
    
    def find_camper
        @camper = Camper.find(params[:id])
    end

    def camper_params
        params.permit(:name, :age)
    end
end
