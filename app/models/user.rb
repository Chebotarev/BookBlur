class User < ActiveRecord::Base
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank"}
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :lists,
    class_name: "List",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :marks,
    class_name: "Mark",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :owner_id,
    primary_key: :id
  )

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user && user.is_password?(password)
    user
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
