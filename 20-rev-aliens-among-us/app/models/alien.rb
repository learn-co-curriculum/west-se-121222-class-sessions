class Alien < ActiveRecord::Base
    has_many :visitations
    has_many :earthlings, through: :visitations

    def visit(earthling)
        # Visitation.create(date: Date.new, earthling: earthling, alien_id: self.id)
        self.visitations.create(date: Date.new, earthling: earthling)
    end

    

end
