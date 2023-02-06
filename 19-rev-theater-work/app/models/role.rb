class Role < ActiveRecord::Base
    has_many :auditions

    def actors
        # self.auditions.map{|audition| audition.actor} # vanilla Ruby
        # self.auditions.map(&:actor) # same as above with proc syntax
        self.auditions.pluck(:actor)
    end

    def locations
        self.auditions.pluck(:location) # see #actors above
        # auditions.pluck(:location) # see #actors above
    end

    def lead
        lead = self.auditions.find_by(hired: true)
        if lead
            lead
        else
            "No actor has hired for this role."
        end
    end
    
    def understudy
        # hireds = self.auditions.where(hired: true)
        # if hireds.count > 1
        #     hireds.second
        # else
        #     'No actor has been hired to understudy this role'
        # end
        understudy = self.auditions.where(hired: true).second
        understudy ? understudy : "No actor has been hired to understudy this role"
    end

end