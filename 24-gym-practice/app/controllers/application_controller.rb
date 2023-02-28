class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    private

    def record_invalid_response(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found_response(exception)
        render json: { "error": "#{exception.model} not found"}, status: :not_found
    end

    
end
